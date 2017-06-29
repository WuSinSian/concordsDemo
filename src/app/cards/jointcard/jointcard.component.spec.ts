import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointcardComponent } from './jointcard.component';

describe('JointcardComponent', () => {
  let component: JointcardComponent;
  let fixture: ComponentFixture<JointcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
