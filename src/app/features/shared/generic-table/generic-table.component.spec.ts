import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableComponent } from './generic-table.component';

interface TestObject {
  id: string;
}

describe.skip(GenericTableComponent.name, () => {
  let component: GenericTableComponent<TestObject>;
  let fixture: ComponentFixture<GenericTableComponent<TestObject>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
