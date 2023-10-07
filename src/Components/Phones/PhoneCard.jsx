import React from "react";

export const PhoneCard = ({ phone }) => {
  const [id, img, brand, bgColor, features, ratings, price, model] =
    phone || [];

  return (
    <div>
      <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="p-6">
          <div class="mb-2 flex items-center justify-between">
            <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {model}
            </p>
            <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              $95.00
            </p>
          </div>
          <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Favorites
          </button>
        </div>
      </div>
    </div>
  );
};
