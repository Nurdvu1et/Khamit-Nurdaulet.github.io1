document.getElementById('calculate-btn').addEventListener('click', calculateDowry); 

function calculateDowry() {
    let basePrice = 100;
    const educationSelect = document.getElementById('education');
    const education = parseFloat(educationSelect.value);
    if (isNaN(education)) {
        alert('Please select an education level.');
        return;
    }
    const networthSelect = document.getElementById('networth');
    const networth = parseFloat(networthSelect.value);
    if (isNaN(networth)) {
        alert('Please select a family net worth.');
        return;
    }
    const casteSelect = document.getElementById('caste');
    const caste = parseInt(casteSelect.value);
    if (isNaN(caste)) {
        alert('Please select a caste.');
        return;
    }
    let skillPrice = 0;
    if (document.getElementById('music').checked) skillPrice += 10;
    if (document.getElementById('cook').checked) skillPrice += 20;
    if (document.getElementById('easygoing').checked) skillPrice += 15;
    if (document.getElementById('sing').checked) skillPrice += 10;
    const age = parseFloat(document.querySelector('input[name="age"]:checked').value);
    if (isNaN(age)) {
        alert('Please select an age range.');
        return;
    }
    let reputationModifier = 1;
    if (document.getElementById('gossip_parents').checked) reputationModifier *= 0.85;
    if (document.getElementById('gossip_self').checked) reputationModifier *= 0.9;
    if (document.getElementById('general_gossip').checked) basePrice -= 20;
    let finalPrice = ((((basePrice * education) * networth) +caste) + skillPrice) * age;
    finalPrice *= reputationModifier;
    document.getElementById('dowry-result').textContent = `$${finalPrice.toFixed(2)}`;
}
