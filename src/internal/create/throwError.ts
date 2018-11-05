import { Observable } from 'rxjs/internal/Observable';
import { sourceAsObservable } from '../util/sourceAsObservable';
import { FOType, Sink } from '../types';
import { Subscription } from '../Subscription';

export function throwError(err: any): Observable<never> {
  return sourceAsObservable((type: FOType.SUBSCRIBE, sink: Sink<never>, subs: Subscription) => {
    if (type === FOType.SUBSCRIBE) sink(FOType.ERROR, err, subs);
  });
}
