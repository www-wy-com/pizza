import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialManageComponent } from './material-manage.component';

describe('MaterialManageComponent', () => {
  let component: MaterialManageComponent;
  let fixture: ComponentFixture<MaterialManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
