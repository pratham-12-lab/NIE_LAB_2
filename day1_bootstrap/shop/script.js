let totalAmount = 0;

function calculateAmount() {
    const qty = document.getElementById('qty').value;
    const price = document.getElementById('price').value;
    const amount = qty * price;
    document.getElementById('amount').value = amount.toFixed(2);
}

function addToCart() {
    const product = document.getElementById('product').value;
    const qty = document.getElementById('qty').value;
    const price = document.getElementById('price').value;
    const amount = document.getElementById('amount').value;

    // Input validation
    if (!product || qty <= 0 || price < 0) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const cartBody = document.getElementById('cartBody');
    const newRow = cartBody.insertRow();

    newRow.insertCell(0).innerText = product;
    newRow.insertCell(1).innerText = qty;
    newRow.insertCell(2).innerText = price;
    newRow.insertCell(3).innerText = amount;

    totalAmount += parseFloat(amount);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);

    // Clear input fields
    document.getElementById('product').value = '';
    document.getElementById('qty').value = 1;
    document.getElementById('price').value = 0;
    document.getElementById('amount').value = '';

    alert(`${product} has been added to the cart.`);
}

// Event listeners for automatic amount calculation
document.getElementById('qty').addEventListener('input', calculateAmount);
document.getElementById('price').addEventListener('input', calculateAmount);