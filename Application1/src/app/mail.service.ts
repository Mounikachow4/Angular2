import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
	messages = [
	{id:0, text:`hai`},
	{id:1, text:`Greetings`},
	{id:2, text:`how are you doing`}
	];

	update(id, text){
		this.messages= this.messages.map(m =>
			m.id === id
			? {id, text}
			: m
		)
	}
  constructor() { }

}
