import { useState, useCallback, useMemo } from 'react';
import type { Contact, ContactRequest } from '../pages/chat/Types';
import { useLocalStorage } from './useLocalStorage';
import { searchFilter } from '../utils/helpers';
import { validateEmail, validateContactName } from '../utils/validation';

// Mock data - in real app this would come from an API
const initialContacts: Contact[] = [
  {
    id: 1,
    name: 'Diana Jenkins',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    lastMessage: 'Hello!',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    online: true,
    lastSeen: new Date(),
    isFavorite: true,
    info: {
      whatsapp: '48352674290',
      group: 'Support',
      email: 'diana.jenkins@example.com',
    },
  },
  {
    id: 2,
    name: 'John Smith',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMessage: 'See you soon!',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    online: false,
    lastSeen: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    info: {
      whatsapp: '48352674291',
      group: 'Sales',
      email: 'john.smith@example.com',
    },
  },
  {
    id: 3,
    name: 'Alex Blue',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    lastMessage: 'Thanks!',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    online: true,
    lastSeen: new Date(),
    info: {
      whatsapp: '48352674292',
      group: 'Marketing',
      email: 'alex.blue@example.com',
    },
  },
  {
    id: 4,
    name: 'Sam Red',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    lastMessage: 'Let me know.',
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    online: false,
    lastSeen: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    info: {
      whatsapp: '48352674293',
      group: 'Support',
      email: 'sam.red@example.com',
    },
  },
];

const initialRequests: ContactRequest[] = [
  {
    id: 101,
    name: 'Emily Green',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    email: 'emily.green@example.com',
    username: 'emily_green',
    message: 'Hi! I would like to connect with you.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: 102,
    name: 'Michael Brown',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    email: 'michael.brown@example.com',
    username: 'michael_b',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
  },
];

export const useContacts = () => {
  const [contacts, setContacts] = useLocalStorage<Contact[]>('secure-messenger-contacts', initialContacts);
  const [contactRequests, setContactRequests] = useLocalStorage<ContactRequest[]>('secure-messenger-requests', initialRequests);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  // Filtered contacts based on search term
  const filteredContacts = useMemo(() => {
    return searchFilter(contacts, searchTerm, ['name', 'info']);
  }, [contacts, searchTerm]);

  // Favorite contacts
  const favoriteContacts = useMemo(() => {
    return contacts.filter(contact => contact.isFavorite);
  }, [contacts]);

  // Online contacts
  const onlineContacts = useMemo(() => {
    return contacts.filter(contact => contact.online);
  }, [contacts]);

  // Add a new contact
  const addContact = useCallback((contactData: Omit<Contact, 'id'>) => {
    if (!validateContactName(contactData.name)) {
      throw new Error('Invalid contact name');
    }

    if (contactData.info.email && !validateEmail(contactData.info.email)) {
      throw new Error('Invalid email address');
    }

    const newContact: Contact = {
      ...contactData,
      id: Date.now(), // In real app, this would come from the server
    };

    setContacts(prev => [...prev, newContact]);
    return newContact;
  }, [setContacts]);

  // Update an existing contact
  const updateContact = useCallback((id: number, updates: Partial<Contact>) => {
    setContacts(prev =>
      prev.map(contact =>
        contact.id === id ? { ...contact, ...updates } : contact
      )
    );
  }, [setContacts]);

  // Delete a contact
  const deleteContact = useCallback((id: number) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
    if (selectedContact?.id === id) {
      setSelectedContact(null);
    }
  }, [setContacts, selectedContact]);

  // Toggle favorite status
  const toggleFavorite = useCallback((id: number) => {
    updateContact(id, { isFavorite: !contacts.find(c => c.id === id)?.isFavorite });
  }, [updateContact, contacts]);

  // Block/unblock contact
  const toggleBlock = useCallback((id: number) => {
    updateContact(id, { isBlocked: !contacts.find(c => c.id === id)?.isBlocked });
  }, [updateContact, contacts]);

  // Send contact request
  const sendContactRequest = useCallback(async (emailOrUsername: string, _message?: string) => {
    if (!emailOrUsername.trim()) {
      throw new Error('Email or username is required');
    }

    // In real app, this would make an API call
    // For now, we'll just simulate success
    return { success: true, message: 'Contact request sent successfully' };
  }, []);

  // Accept contact request
  const acceptContactRequest = useCallback((requestId: number) => {
    const request = contactRequests.find(req => req.id === requestId);
    if (!request) return;

    // Create new contact from request
    const newContact: Contact = {
      id: Date.now(),
      name: request.name,
      avatar: request.avatar,
      lastMessage: '',
      online: false,
      info: {
        whatsapp: '',
        group: 'General',
        email: request.email,
      },
    };

    addContact(newContact);

    // Remove from requests
    setContactRequests(prev => prev.filter(req => req.id !== requestId));
  }, [contactRequests, addContact, setContactRequests]);

  // Decline contact request
  const declineContactRequest = useCallback((requestId: number) => {
    setContactRequests(prev => prev.filter(req => req.id !== requestId));
  }, [setContactRequests]);

  // Update contact's online status
  const updateOnlineStatus = useCallback((id: number, online: boolean) => {
    updateContact(id, {
      online,
      lastSeen: online ? new Date() : contacts.find(c => c.id === id)?.lastSeen
    });
  }, [updateContact, contacts]);

  // Update typing status
  const updateTypingStatus = useCallback((id: number, isTyping: boolean) => {
    updateContact(id, { isTyping });
  }, [updateContact]);

  return {
    contacts,
    filteredContacts,
    favoriteContacts,
    onlineContacts,
    contactRequests,
    searchTerm,
    setSearchTerm,
    selectedContact,
    setSelectedContact,
    addContact,
    updateContact,
    deleteContact,
    toggleFavorite,
    toggleBlock,
    sendContactRequest,
    acceptContactRequest,
    declineContactRequest,
    updateOnlineStatus,
    updateTypingStatus,
  };
};
