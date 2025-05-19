import React from 'react'

function ReturnsandRefund() {
  return (
    <div class="m-5 font-sans">
    <div class="bg-white flex justify-center px-5">
    <div class="max-w-5xl py-10">
        <h1 class="font-montserrat font-bold text-4xl sm:text-5xl text-center mb-8 sm:mb-10">Return and Refund</h1>
        <ul class="font-opensans font-semibold text-lg sm:text-xl leading-relaxed sm:leading-loose tracking-tight ">
            <li class="mb-2">At Daily Waters, customer satisfaction is our top priority. If you're not completely satisfied with your purchase, we're here to help.</li>
            <li class="mb-2"><strong class="font-bold">✅ Returns</strong></li>
            <li class="mb-2"><strong class="font-bold">You can request a return within 3 days of delivery if the product is:</strong>
            <ul class="list-disc list-inside ml-5 mt-2 space-y-2">
                <li>Damaged</li>
                <li>Expired</li>
                <li>Incorrect item delivered</li>
            </ul>
            <li>The item must be unopened, unused, and in its original packaging.</li>
            <li class="mb-2">To initiate a return, please contact our customer support with your order number and reason for return.</li>
            </li>
            <li class="mb-5"><strong class="font-bold">💰 Refunds</strong></li>
            <ul class="list-disc list-inside ml-5 ">
            <li class="mb-2">Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
            <li class="mb-2">If approved, your refund will be processed to your original payment method within 5–7 business days.</li>
            <li class="mb-2">In case of prepaid orders, the refund will be made directly to your bank or payment wallet.</li>
            <li class="mb-2">For Cash on Delivery (COD) orders, we will initiate a bank transfer after collecting your account details securely.</li>
            </ul>
            <li class="mb-5"><strong class="font-bold">❌ Non-Returnable Items</strong></li>
                <ul class="list-disc list-inside ml-5 ">
            <li class="mb-2">Opened bottles or partially used products</li>
            <li class="mb-2">Items returned beyond the 3-day window</li>
            <li class="mb-2">Products without original packaging</li>
            </ul>
        </ul>
     </div>
</div>
</div>
  )
}

export default ReturnsandRefund
