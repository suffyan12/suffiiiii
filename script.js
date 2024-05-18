// Add event listeners for login, signup, and forgot password modals
$('#loginModal').on('show.bs.modal', function(event) {
    // Clear form fields
    $('#username').val('');
    $('#password').val('');
});

$('#signupModal').on('show.bs.modal', function(event) {
    // Clear form fields
    $('#username').val('');
    $('#email').val('');
    $('#phone').val('');
    $('#password').val('');
});

$('#forgotPasswordModal').on('show.bs.modal', function(event) {
    // Clear form fields
    $('#email').val('');
});

// Add event listener for order placement form
$('#orderPlacementForm').on('submit', function(event) {
    event.preventDefault();
    // Get form data
    var restaurant = $('#restaurant').val();
    var quantity = $('#quantity').val();
    // Send AJAX request to place order
    $.ajax({
        type: 'POST',
        url: 'placeOrder.php',
        data: { restaurant: restaurant, quantity: quantity },
        success: function(data) {
            alert('Order placed successfully!');
        },
        error: function(xhr, status, error) {
            alert('Error placing order: ' + error);
        }
    });
});

// Add event listener for payment method form
$('#paymentMethodForm').on('submit', function(event) {
    event.preventDefault();
    // Get form data
    var paymentMethod = $('#paymentMethod').val();
    var account = $('#account').val();
    // Send AJAX request to process payment
    $.ajax({
        type: 'POST',
        url: 'processPayment.php',
        data: { paymentMethod: paymentMethod, account: account },
        success: function(data) {
            alert('Payment processed successfully!');
        },
        error: function(xhr, status, error) {
            alert('Error processing payment: ' + error);
        }
    });
});

// Add event listener for feedback and ratings form
$('#feedbackForm').on('submit', function(event) {
    event.preventDefault();
    // Get form data
    var rating = $('#rating').val();
    var feedback = $('#feedback').val();
    // Send AJAX request to submit feedback
    $.ajax({
        type: 'POST',
        url: 'submitFeedback.php',
        data: { rating: rating, feedback: feedback },
        success: function(data) {
            alert('Feedback submitted successfully!');
        },
        error: function(xhr, status, error) {
            alert('Error submitting feedback: ' + error);
        }
    });
});