@extends('layouts.app')

@section('content')
    <section class="container">
        <x-heading title="Edit resource" />

        <section>
            <form
                action="{{ route('resources.update', [$resource->id]) }}"
                method="post"
                class="space-y-8 divide-y divide-gray-200"
            >
                @method('put')
                @csrf

                <div class="space-y-8 divide-y divide-gray-200">
                    <div>
                        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-4">
                                <x-forms.label for="name">
                                    Name
                                </x-forms.label>

                                <x-forms.input
                                    id="name"
                                    name="name"
                                    value="{{ old('name') ?? $resource->name }}"
                                    placeholder="Name"
                                />
                            </div>

                            <div class="sm:col-span-4">
                                <x-forms.label for="description">
                                    Description
                                </x-forms.label>

                                <x-forms.textarea
                                    id="description"
                                    name="description"
                                    placeholder="Description"
                                >{{ old('description') ?? $resource->description }}</x-forms.textarea>
                            </div>

                            <div class="sm:col-span-4">
                                <x-forms.label for="categories">
                                    Categories
                                </x-forms.label>

                                <x-forms.select
                                    id="categories"
                                    name="categories[]"
                                    :options="\App\Models\Category::orderBy('name')->pluck('name', 'id')"
                                    :selected="old('categories') ?? $resource->categories->pluck('id')->toArray()"
                                    multiple
                                />
                            </div>

                            <div class="sm:col-span-4">
                                <x-forms.label for="groups">
                                    Groups
                                </x-forms.label>

                                <x-forms.select
                                    id="groups"
                                    name="groups[]"
                                    :options="\App\Models\Group::orderBy('name')->pluck('name', 'id')"
                                    :selected="old('groups') ?? $resource->groups->pluck('id')->toArray()"
                                    multiple
                                />
                            </div>

                            <div class="sm:col-span-4">
                                <x-forms.checkbox
                                    id="is_facility"
                                    name="is_facility"
                                    :checked="old('is_facility') ?? $resource->is_facility"
                                />

                                <x-forms.label for="is_facility" class="ml-1">
                                    Facility
                                </x-forms.label>
                            </div>
                        </div>
                    </div>

                    <div class="pt-5">
                        <div class="flex justify-end">
                            <x-forms.link :href="session()->get('index-referer-url') ?? request()->headers->get('referer')">
                                Cancel
                            </x-forms.link>
                            <x-forms.button>
                                Update
                            </x-forms.button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </section>
@endsection
