function trackProduct() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    const trackingInfo = document.getElementById('trackingInfo');

    // Simulated response for the tracking number
    const sampleData = {
        '12345': 'Product shipped from warehouse. In transit to destination.',
        '67890': 'Product delivered successfully to the recipient.',
        '54321': 'Product delayed due to unforeseen circumstances. Expected delivery in 2 days.'
    };

    if (sampleData[trackingNumber]) {
        trackingInfo.innerHTML = `<strong>Status:</strong> ${sampleData[trackingNumber]}`;
    } else {
        trackingInfo.innerHTML = `<strong>Error:</strong> Tracking number not found. Please try again.`;
    }
}
