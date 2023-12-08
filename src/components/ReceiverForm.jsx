import React from 'react'
import Header from './Header';
import Footer from './Footer';



function DonorForm() {
  return (
    <div>
    <section class="bg-gray-50 p-10 mt-3 ">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-green-400 md:text-2xl dark:text-white">
                      Get a Donor 
                  </h1>
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  
                  <form class="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                          <input  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required="" />
                      </div>
                  
                      <div>
                          <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your DOB</label>
                          <input type='text'  placeholder = "DD-MM-YYYY" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <div>
                          <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Gender </label>
                          <input type='text' placeholder='Male' class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <div>
                          <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number </label>
                          <input type='text' placeholder='+91' class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                       <div>
                          <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Email </label>
                          <input type='email' placeholder='youremail@gmail.com' class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                     <div>
                          <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Required Stem Cells</label>
                                    <select  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="stem" name="stemcells">
                                        <option>Embryonic Stem Cells (ESCs)</option>
                                        <option >Adult Stem Cells (also known as Somatic or Tissue-Specific Stem Cells)</option>
                                        <option>Perinatal Stem Cells</option>
                                        <option >Fetal Stem Cells</option>
                                    </select>
                        </div>
                      <div>
                          <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload HLA Report </label>
                          <input type='file' placeholder='File ..' class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                   
                      <button type="submit" class="w-full text-black bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit Form</button>
                    
                  </form>
              </div>
          </div>
      </div>
    </section>
    </div>
  )
}

export default DonorForm