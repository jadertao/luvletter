import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { tap, delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Luvletter } from '../utils/interface';

@Injectable()
export class QueryService {

  items: Observable<any[]>;

  constructor(public db: AngularFirestore) {
  }

  getUserEmail(): string {
    return localStorage.getItem('user');
  }

  getUserNickname(): any {
    return this.db
      .collection('users', (ref) => ref.where('email', '==', this.getUserEmail()))
      .valueChanges();
  }

  getPostList(): Array<any> {
    const posts: Array<Luvletter> = [
      {
        id: 1,
        avator: '#DE3C3C',
        user: 'jader',
        nickname: 'jader',
        time: 1234213124,
        mood: '开心',
        content: `天下只有两种人。比如一串葡萄到手，一种人挑最好的先吃，另一种人把最好的留到最后吃。
        照例第一种人应该乐观，因为他每吃一颗都是吃剩的葡萄里最好的；第二种人应该悲观，因为他每吃一颗都是吃剩的葡萄里最坏的。
        不过事实却适得其反，缘故是第二种人还有希望，第一种人只有回忆。`
      }, {
        id: 1,
        avator: '#DE3C3C',
        user: 'jader',
        nickname: 'jader',
        time: 124435245,
        mood: '开心',
        content: `天下只有两种人。比如一串葡萄到手，一种人挑最好的先吃，另一种人把最好的留到最后吃。
        照例第一种人应该乐观，因为他每吃一颗都是吃剩的葡萄里最好的；第二种人应该悲观，因为他每吃一颗都是吃剩的葡萄里最坏的。
        不过事实却适得其反，缘故是第二种人还有希望，第一种人只有回忆。`
      }
    ];
    return posts;
  }

}
