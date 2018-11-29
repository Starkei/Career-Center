import { trigger, state, style, group, transition, animate } from "@angular/animations";

export const DropDown = [
  trigger('dropDown', [
    state('in', style({
      'visibility': 'visible',
      'max-height' : '500px',
      'opacity': '1'
    })),
    state('out', style({
      'visibility': 'hidden',
      'max-height' : '0px',
      'opacity': '0'
    })),
    transition('out => in', group([
      animate(1, style({
        'visibility': 'visible'
      })),
      animate(600, style({
        'max-height' : '500px'
      })),
      animate(600, style({
        'opacity' : '1'
      }))
    ]))
  ])
];
