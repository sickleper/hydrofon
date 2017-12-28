<?php

namespace Hydrofon\Http\Controllers;

use Hydrofon\Booking;
use Hydrofon\Http\Requests\BookingDestroyRequest;
use Hydrofon\Http\Requests\BookingStoreRequest;
use Hydrofon\Http\Requests\BookingUpdateRequest;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bookings = Booking::with(['object', 'user'])->get();

        return view('bookings.index')->with('bookings', $bookings);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('bookings.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Hydrofon\Http\Requests\BookingStoreRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(BookingStoreRequest $request)
    {
        $currentUser = auth()->user();

        Booking::create(array_merge($request->all(), [
            'user_id'       => $currentUser->isAdmin() && $request->input('user_id') ? $request->input('user_id') : $currentUser->id,
            'created_by_id' => $currentUser->id,
        ]));

        return redirect('/bookings');
    }

    /**
     * Display the specified resource.
     *
     * @param  \Hydrofon\Booking $booking
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Booking $booking)
    {
        return view('bookings.show')->with('booking', $booking);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \Hydrofon\Booking $booking
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking)
    {
        return view('bookings.edit')->with('booking', $booking);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Hydrofon\Http\Requests\BookingUpdateRequest $request
     * @param  \Hydrofon\Booking $booking
     *
     * @return \Illuminate\Http\Response
     */
    public function update(BookingUpdateRequest $request, Booking $booking)
    {
        $currentUser = auth()->user();

        $booking->update(array_merge($request->all(), [
            'user_id' => $currentUser->isAdmin() && $request->input('user_id') ? $request->input('user_id') : $booking->user_id,
        ]));

        return redirect('/bookings');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Hydrofon\Booking $booking
     * @param \Hydrofon\Http\Requests\BookingDestroyRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $booking, BookingDestroyRequest $request)
    {
        $booking->delete();

        return redirect('/bookings');
    }
}