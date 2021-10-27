import { Directive, OnInit } from '@angular/core';


@Directive({ selector: '[appShowAuthed]' })
export class ShowAuthedDirective implements OnInit {
  ngOnInit() {}
  // condition: boolean;
  //
  // @Input() set appShowAuthed(condition: boolean) {
  //   this.condition = condition;
  // }
  //
  // constructor(
  //   private templateRef: TemplateRef<any>,
  //   private auth: AuthService,
  //   private viewContainer: ViewContainerRef
  // ) {
  // }
  //
  // ngOnInit() {
  //   this.auth.currentUser.subscribe(
  //     (user) => {
  //       this.viewContainer.remove();
  //       if (user && this.condition || !user && !this.condition) {
  //         this.viewContainer.createEmbeddedView(this.templateRef);
  //       }
  //     }
  //   );
  // }
}
