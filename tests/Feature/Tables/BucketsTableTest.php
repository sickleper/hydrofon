<?php

namespace Tests\Feature\Tables;

use App\Http\Livewire\BucketsTable;
use App\Models\Bucket;
use App\Models\Resource;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class BucketsTableTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Table is rendered with items.
     *
     * @return void
     */
    public function testItemsAreRendered()
    {
        $items = Bucket::factory()->count(3)->create();

        Livewire::test(BucketsTable::class, ['items' => $items])
                ->assertSee([
                    $items[0]->name,
                    $items[1]->name,
                    $items[2]->name,
                ]);
    }

    /**
     * Inline edit form is displayed.
     *
     * @return void
     */
    public function testEditFormIsDisplayed()
    {
        $items = Bucket::factory()->count(1)->create();

        Livewire::test(BucketsTable::class, ['items' => $items])
                ->emit('edit', $items[0]->id)
                ->assertSet('isEditing', $items[0]->id)
                ->assertSeeHtml('name="name" value="'.$items[0]->name.'"');
    }

    /**
     * Edited bucket can be saved.
     *
     * @return void
     */
    public function testAdministratorCanEditABucket()
    {
        $items = Bucket::factory()->count(1)->create();

        Livewire::actingAs(User::factory()->admin()->create())
                ->test(BucketsTable::class, ['items' => $items])
                ->emit('edit', $items[0]->id)
                ->set('editValues.name', 'Updated Bucket')
                ->emit('save')
                ->assertOk();

        $this->assertDatabaseHas(Bucket::class, [
            'name' => 'Updated Bucket',
        ]);
    }

    /**
     * Regular user can not update a bucket.
     *
     * @return void
     */
    public function testUserCanNotEditABucket()
    {
        $items = Bucket::factory()->count(1)->create();

        Livewire::actingAs(User::factory()->create())
                ->test(BucketsTable::class, ['items' => $items])
                ->emit('edit', $items[0]->id)
                ->set('editValues.name', 'Updated Bucket')
                ->emit('save')
                ->assertForbidden();

        $this->assertDatabaseHas(Bucket::class, [
            'name' => $items[0]->name,
        ]);
    }

    /**
     * Resource relationships are stored.
     *
     * @return void
     */
    public function testRelatedResourcesAreSaved()
    {
        $items = Bucket::factory()->count(1)->create();
        $resource = Resource::factory()->create();

        Livewire::actingAs(User::factory()->admin()->create())
                ->test(BucketsTable::class, ['items' => $items])
                ->emit('edit', $items[0]->id)
                ->set('editValues.resources', [$resource->id])
                ->emit('save')
                ->assertOk();

        $this->assertEquals(1, $items[0]->resources()->count());
    }

    /**
     * A bucket must have a name.
     *
     * @return void
     */
    public function testBucketMustHaveAName()
    {
        $items = Bucket::factory()->count(1)->create();

        Livewire::actingAs(User::factory()->admin()->create())
                ->test(BucketsTable::class, ['items' => $items])
                ->emit('edit', $items[0]->id)
                ->set('editValues.name', '')
                ->emit('save')
                ->assertHasErrors(['editValues.name']);

        $this->assertDatabaseHas(Bucket::class, [
            'name' => $items[0]->name,
        ]);
    }

    /**
     * Resources must exist to be allowed.
     *
     * @return void
     */
    public function testMissingResourcesAreNotAllowed()
    {
        $items = Bucket::factory()->count(1)->create();

        Livewire::actingAs(User::factory()->admin()->create())
                ->test(BucketsTable::class, ['items' => $items])
                ->emit('edit', $items[0]->id)
                ->set('editValues.resources', [100])
                ->emit('save')
                ->assertHasErrors(['editValues.resources.*']);

        $this->assertEquals(0, $items[0]->resources()->count());
    }

    /**
     * Bucket can be deleted.
     *
     * @return void
     */
    public function testAdministratorCanDeleteBucket()
    {
        $items = Bucket::factory()->count(1)->create();

        Livewire::actingAs(User::factory()->admin()->create())
                ->test(BucketsTable::class, ['items' => $items])
                ->emit('delete', $items[0]->id)
                ->assertOk();

        $this->assertModelMissing($items[0]);
    }

    /**
     * Regular user can not delete bucket.
     *
     * @return void
     */
    public function testUserCanNotDeleteBucket()
    {
        $items = Bucket::factory()->count(1)->create();

        Livewire::actingAs(User::factory()->create())
                ->test(BucketsTable::class, ['items' => $items])
                ->emit('delete', $items[0]->id)
                ->assertForbidden();

        $this->assertModelExists($items[0]);
    }
}
