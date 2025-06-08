document.getElementById('dashboardBtn').addEventListener('click', () => {
  document.getElementById('formulario').style.display = 'none';
  document.getElementById('dashboard').classList.remove('hidden');
});

document.getElementById('voltar').addEventListener('click', () => {
  document.getElementById('formulario').style.display = 'block';
  document.getElementById('dashboard').classList.add('hidden');
});

document.getElementById('centralizar').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      alert(`Localização: ${position.coords.latitude}, ${position.coords.longitude}`);
    });
  } else {
    alert("Geolocalização não suportada");
  }
});

document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();

  const contrato = document.getElementById('contrato').value;
  const tipo = document.getElementById('tipo').value;
  const fibra = document.getElementById('fibra').value;
  const observacoes = document.getElementById('observacoes').value;

  const confirmacao = confirm(`Confirma o envio dos dados?\nContrato: ${contrato}\nMotivo: ${tipo}\nFibra: ${fibra}m\nObs: ${observacoes}`);
  if (confirmacao) {
    alert("Formulário enviado!");
    this.reset();
  }
});
