function selectBox(boxName) {
    document.getElementById('selectedBox').value = boxName;
    document.getElementById('successMsg').textContent = '';
  }
  
  document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const box = document.getElementById('selectedBox').value;
    const successMsg = document.getElementById('successMsg');
  
    if (name && address && box) {
      successMsg.textContent = `Thank you, ${name}! Your "${box}" box will be delivered to ${address}.`;
      this.reset();
    } else {
      successMsg.textContent = "Please select a box and fill all fields.";
    }
  });
  