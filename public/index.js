console.log('Main page open');

async function Click() {
  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const type = document.getElementById('type').value;
  const rarity = document.getElementById('rarity').value;
  const nation = document.getElementById('nation').value;
  const data = { id, name, type, rarity, nation };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
  };
  const responseJSON = await fetch('/saveship', options);
  const response = await responseJSON.json();
  console.log(response);
  document.getElementById('id').focus();
}