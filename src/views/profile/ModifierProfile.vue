<template>
  <welcome-layout>
    <header class="bg-blue-100 shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold leading-tight text-gray-900">
          <span class="text-grey-dark  font-bold"></span>
          Modifier Profile
        </h1>
      </div>
    </header>
    <main class="bg-white">
      <div class="max-w-8xl mx-auto sm:px-6 lg:px-4">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="w-full max-w-7xl mx-auto py-2 sm:px-6 lg:px-2">
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                  <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium text-gray-900">
                      Profile Information
                    </h3>

                    <p class="mt-1 text-sm text-gray-600">
                      Update your account's profile information and email
                      address.
                    </p>
                  </div>
                </div>

                <div class="mt-5 md:mt-0 md:col-span-2">
                  <form>
                    <div class="shadow overflow-hidden sm:rounded-md">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <!-- Name -->
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="name"
                              value="Name"
                              class="block font-medium text-sm text-gray-700"
                              >Intitulé de la formation doctorale
                            </label>
                            <input
                              id="name"
                              type="text"
                              v-model="form1.name"
                              class="
                                mt-1
                                block
                                w-full
                                form-input
                                rounded-md
                                shadow-sm
                              "
                              autocomplete="name"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="name"
                              value="Name"
                              class="block font-medium text-sm text-gray-700"
                              >Laboratoire
                            </label>
                            <select 
                         class="mt-1 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md " required="required" >
                              <option value="oui">LMCS</option>
                              <option value="non">LCSI</option>
                            </select>
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="name"
                              value="Name"
                              class="block font-medium text-sm text-gray-700"
                              >CV
                            </label>
                            <input
                              type="file"
                              name="file"
                              id="file"
                              placeholder="Selectionner"
                              class="
                                mt-1
                                border border-gray-300
                                focus:ring-indigo-500
                                focus:border-indigo-500
                                block
                                w-full
                                shadow-sm
                                sm:text-sm
                                rounded-md
                              "
                              required
                            />
                          </div>
                          
                        </div>
                      </div>

                      <div
                        class="
                          flex
                          items-center
                          justify-end
                          px-4
                          py-3
                          bg-gray-50
                          text-right
                          sm:px-6
                        "
                      >
                        <div>
                          <transition
                            leave-active-class="transition ease-in duration-1000"
                            leave-class="opacity-100"
                            leave-to-class="opacity-0"
                          >
                            <div v-show="on" class="text-sm text-gray-600">
                              <slot />
                            </div>
                          </transition>
                        </div>
                        <button
                          class="
                            inline-flex
                            items-center
                            px-4
                            py-2
                            bg-gray-800
                            border border-transparent
                            rounded-md
                            font-semibold
                            text-xs text-white
                            uppercase
                            tracking-widest
                            hover:bg-gray-700
                            active:bg-gray-900
                            focus:outline-none
                            focus:border-gray-900
                            focus:shadow-outline-gray
                            transition
                            ease-in-out
                            duration-150
                          "
                        >
                          Sauvegarder
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                  <div class="border-t border-gray-200"></div>
                </div>
              </div>
              <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                  <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium text-gray-900">
                      Mise à jour de mot de passe
                    </h3>

                    <p class="mt-1 text-sm text-gray-600">
                      Assurez-vous que votre compte utilise un mot de passe long
                      et aléatoire pour rester en sécurité.
                    </p>
                  </div>
                </div>

                <div class="mt-5 md:mt-0 md:col-span-2">
                  <form>
                    <div class="shadow overflow-hidden sm:rounded-md">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="current_password"
                              value="Current Password"
                              class="block font-medium text-sm text-gray-700"
                              >Mot de passe actuel
                            </label>
                            <input
                              id="current_password"
                              type="password"
                              class="
                                mt-1
                                block
                                w-full
                                form-input
                                rounded-md
                                shadow-sm
                              "
                              v-model="form2.current_password"
                              ref="current_password"
                              autocomplete="current-password"
                            />
                          </div>

                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="password"
                              value="New Password"
                              class="block font-medium text-sm text-gray-700"
                              >Nouveau mot de passe
                            </label>
                            <input
                              id="password"
                              type="password"
                              class="
                                mt-1
                                block
                                w-full
                                form-input
                                rounded-md
                                shadow-sm
                              "
                              v-model="form2.password"
                              autocomplete="new-password"
                            />
                          </div>

                          <div class="col-span-6 sm:col-span-4">
                            <label
                              for="password_confirmation"
                              value="Confirm Password"
                              class="block font-medium text-sm text-gray-700"
                              >Confirmez votre mot de passe
                            </label>
                            <input
                              id="password_confirmation"
                              type="password"
                              class="
                                mt-1
                                block
                                w-full
                                form-input
                                rounded-md
                                shadow-sm
                              "
                              v-model="form2.password_confirmation"
                              autocomplete="new-password"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        class="
                          flex
                          items-center
                          justify-end
                          px-4
                          py-3
                          bg-gray-50
                          text-right
                          sm:px-6
                        "
                      >
                        <div>
                          <transition
                            leave-active-class="transition ease-in duration-1000"
                            leave-class="opacity-100"
                            leave-to-class="opacity-0"
                          >
                            <div v-show="on" class="text-sm text-gray-600">
                              <slot />
                            </div>
                          </transition>
                        </div>
                        <button
                          class="
                            inline-flex
                            items-center
                            px-4
                            py-2
                            bg-gray-800
                            border border-transparent
                            rounded-md
                            font-semibold
                            text-xs text-white
                            uppercase
                            tracking-widest
                            hover:bg-gray-700
                            active:bg-gray-900
                            focus:outline-none
                            focus:border-gray-900
                            focus:shadow-outline-gray
                            transition
                            ease-in-out
                            duration-150
                          "
                        >
                          Sauvegarder
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </welcome-layout>
</template>
<script>
import WelcomeLayout from "../WelcomeLayout.vue";
export default {
  components: {
    WelcomeLayout,
  },
  data() {
    return {
      user: {
        intitule: "--------------",
      },

      form1: {
        name: "formation doctorale",
        file: null,
      },
      form2: {
        current_password: "1234",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    updatePassword() {},
  },
};
</script>
