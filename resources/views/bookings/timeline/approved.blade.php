<x-booking-status
    :item="$item"
    :last="$loop->last"
>
    <x-slot:icon class="bg-green-500">
        <x-heroicon-s-check class="h-5 w-5 text-white" />
    </x-slot:icon>

    <p class="text-sm text-gray-500">
        Approved by

        @if($item->causer)
            <a
                href="{{ route('users.show', [$item->causer]) }}"
                class="font-medium text-gray-900"
            >{{ $item->causer->name }}</a>
        @else
            a <span class="font-medium text-gray-900">deleted user</span>
        @endif
    </p>
</x-booking-status>
