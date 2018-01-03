<?php

namespace Hydrofon\Policies;

use Hydrofon\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the model.
     *
     * @param  \Hydrofon\User $user
     * @param  \Hydrofon\User $model
     *
     * @return mixed
     */
    public function view(User $user, User $model)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \Hydrofon\User $user
     *
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \Hydrofon\User $user
     * @param  \Hydrofon\User $model
     *
     * @return mixed
     */
    public function update(User $user, User $model)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \Hydrofon\User $user
     * @param  \Hydrofon\User $model
     *
     * @return mixed
     */
    public function delete(User $user, User $model)
    {
        return $user->isAdmin() && $user->id !== $model->id;
    }
}
