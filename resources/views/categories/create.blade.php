@extends('layouts.app')

@section('content')
    <section class="container">
        <x-heading title="Create category" />

        <section>
            <form
                action="{{ route('categories.store') }}"
                method="post"
                class="space-y-8 divide-y divide-gray-200"
            >
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
                                    value="{{ old('name') ?? null }}"
                                    placeholder="Name"
                                />
                            </div>

                            <div class="sm:col-span-4">
                                <x-forms.label for="parent_id">
                                    Parent
                                </x-forms.label>

                                <x-forms.select
                                    id="parent_id"
                                    name="parent_id"
                                    :options="\App\Models\Category::orderBy('name')->pluck('name', 'id')"
                                    :selected="old('parent_id') ?? null"
                                    placeholder="Select a parent..."
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
                                    :selected="old('groups') ?? null"
                                    multiple
                                />
                            </div>
                        </div>
                    </div>

                    <div class="pt-5">
                        <div class="flex justify-end">
                            <x-forms.link :href="session()->get('index-referer-url') ?? request()->headers->get('referer')">
                                Cancel
                            </x-forms.link>
                            <x-forms.button>
                                Create
                            </x-forms.button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </section>
@endsection
