import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public post = [
    {
      name: 'Tigers',
      id: '1',
      description: 'Tigers are bright reddish tan, beautifully marked with dark, almost black, vertical stripes.',
      img: 'https://www.toledozoo.org/wp-content/uploads/2018/01/IMG_0082cc.jpg',
      rank: 5
    },
    {
      name: 'Dolphins',
      id: '2',
      description: 'hey only need to breath air from the surface once every 5 to 10 minutes using the blow hole at the top of their heads which is like a large nostril.',
      img: 'https://www.czs.org/getattachment/Brookfield-ZOO/Zoo-Animals/Seven-Seas/Bottlenose-Dolphin/Dolphins_402x500.jpg.aspx',
      rank: 2
    }
  ];

  constructor() { }
}
