import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestBoomComponent } from './Pages/TestBoom/TestBoom.component';

const routes: Routes = [
  { path: 'TestBoom', component: TestBoomComponent },
  { path: '****', redirectTo: '/TestBoom' }, 
 { path: '', redirectTo: '/TestBoom', pathMatch: 'full' },
 { path: '**', redirectTo: '/TestBoom', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
