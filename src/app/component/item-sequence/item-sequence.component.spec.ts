import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSequenceComponent } from './item-sequence.component';

describe('ItemSequenceComponent', () => {
  let component: ItemSequenceComponent;
  let fixture: ComponentFixture<ItemSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemSequenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
