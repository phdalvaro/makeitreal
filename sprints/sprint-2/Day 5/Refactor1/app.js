// Obtenemos los contactos del localStorage o inicializar un array vacío.
const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
const contactList = document.getElementById('contactList');
const filterInput = document.getElementById('filter');
const clearFilterBtn = document.getElementById('clearFilterBtn');
const addContactBtn = document.getElementById('addContactBtn');
const contactForm = document.getElementById('contacts');

// Función para sanitizar entradas de texto
const sanitizeInput = (input) => {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
  return input.replace(/[&<>"'/]/g, match => map[match]).trim();
};

// Función para validar el nombre y el teléfono
const validateInput = (name, phone) => {
  if (!/^[A-Za-z\s]+$/.test(name)) {
    showError('Name should contain only letters.', 'name');
    return false;
  }
  if (!/^[0-9]+$/.test(phone)) {
    showError('Phone should contain only numbers.', 'phone');
    return false;
  }
  return true;
};

// Mostramos mensajes de error
const showError = (message, elementId) => {
  const errorSpan = document.createElement('span');
  errorSpan.classList.add('error');
  errorSpan.textContent = message;
  document.getElementById(elementId).insertAdjacentElement('afterend', errorSpan);
  setTimeout(() => errorSpan.remove(), 1500);
};

// Función para renderizar la lista de contactos
const renderContacts = (contactsToRender = contacts) => {
  contactList.innerHTML = contactsToRender.map(contact => `
    <li class="contact-item" data-id="${contact.id}">
      <strong>${contact.name}</strong> - ${contact.phone} 
      <button class="edit-btn">Edit</button> 
      <button class="delete-btn">Delete</button>
    </li>
  `).join('');
};

// Manejamos el envío del formulario
contactForm.onsubmit = function (e) {
  e.preventDefault();
  
  const name = sanitizeInput(document.getElementById('name').value);
  const phone = sanitizeInput(document.getElementById('phone').value);
  const terms = document.getElementById('terms').checked;

  if (!validateInput(name, phone) || !terms) {
    showError('Please fill in all fields and accept the terms', 'addContactBtn');
    return;
  }

  const newContact = { id: Date.now(), name, phone };
  contacts.push(newContact);
  localStorage.setItem('contacts', JSON.stringify(contacts));
  
  renderContacts();
  contactForm.reset();
};

// Manejamos acciones de eliminar y editar contactos
contactList.addEventListener('click', (e) => {
  const contactId = Number(e.target.closest('li').dataset.id);

  if (e.target.classList.contains('delete-btn')) {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    renderContacts(updatedContacts);
  } else if (e.target.classList.contains('edit-btn')) {
    const contactToEdit = contacts.find(contact => contact.id === contactId);
    document.getElementById('name').value = contactToEdit.name;
    document.getElementById('phone').value = contactToEdit.phone;
    addContactBtn.textContent = 'Update Contact';

    addContactBtn.onclick = () => {
      const updatedName = sanitizeInput(document.getElementById('name').value);
      const updatedPhone = sanitizeInput(document.getElementById('phone').value);

      if (!validateInput(updatedName, updatedPhone)) return;

      contacts.forEach(contact => {
        if (contact.id === contactId) {
          contact.name = updatedName;
          contact.phone = updatedPhone;
        }
      });
      
      localStorage.setItem('contacts', JSON.stringify(contacts));
      renderContacts();
      contactForm.reset();
      addContactBtn.textContent = 'Add Contact';
    };
  }
});

// Manejar el filtro de búsqueda
filterInput.oninput = () => {
  const filterValue = filterInput.value.toLowerCase();
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filterValue)
  );
  renderContacts(filteredContacts);
};

// Limpiar el filtro de búsqueda
clearFilterBtn.onclick = () => {
  filterInput.value = '';
  renderContacts();
};

// Renderizamos la lista inicial de contactos
renderContacts();
