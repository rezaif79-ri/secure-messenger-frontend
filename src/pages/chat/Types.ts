export interface Contact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  online: boolean;
  info: {
    whatsapp: string;
    group: string;
  };
}

export interface ChatMessage {
  from: string;
  text: string;
}

export interface ChatCard {
  title: string;
  desc: string;
  img: string;
}
