const messages = document.querySelectorAll('.notification-card')

// Set all messages to unread
messages.forEach(message => {
    message.classList.add('not-read')
})

const notificationsMonitor = document.querySelector('.notifications-container').querySelector('strong')

function updateUnreadCount() {
    const unreadMessages = document.querySelectorAll('.notification-card.not-read')
    notificationsMonitor.innerHTML = unreadMessages.length
}


messages.forEach(message => {
    message.addEventListener('click', function() {
        setRead.call(this)
        updateUnreadCount()
    })
})


function setRead() {
    this.classList.remove('not-read')
}


const setAllRead = document.querySelector('#toggleAllReadBtn').addEventListener('click', function() {
    messages.forEach((message) => {
        message.classList.remove('not-read')
    })
    updateUnreadCount()
})

updateUnreadCount()