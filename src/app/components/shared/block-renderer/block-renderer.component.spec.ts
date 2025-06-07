import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockRendererComponent } from './block-renderer.component';

describe('BlockRendererComponent', () => {
  let component: BlockRendererComponent;
  let fixture: ComponentFixture<BlockRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
