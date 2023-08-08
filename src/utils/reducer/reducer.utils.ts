// acyion type carries ANY but must still be given a particular type
import  { AnyAction } from 'redux';

type Matchable<AC extends () => AnyAction> = AC & {  // ActionCreator that returns any action in form of string
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
} 

export function withMatcher<AC extends () => AnyAction & {type: string }>(actionCreator: AC): Matchable<AC>;   // it means the above function definition

export function withMatcher<AC extends (...args: any[]) => AnyAction & {type: string }>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    }
  })
}
 
export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
};

export type Action<T> = {
    type: T;
}
export function createAction<T extends string, P>( type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string, P>( type: T, payload: void): Action<T>;

export function createAction<T extends string, P>( type: T, payload: P) {
  return  { type, payload };
}