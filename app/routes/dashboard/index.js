import Controller from './Controller';
import { KPI } from './KPI';
import { Charts } from './Charts';
import { TopProducts } from './TopProducts';
import { TopExpenses } from './TopExpenses';
import { bind, expr } from 'cx/ui';

export default () => (
   <cx>
      <div class="bg-gray-50 overflow-auto" controller={Controller}>
         <div class="grid grid-cols-4 p-8 gap-8" style="grid-template-rows: auto; width: 1150px">
            <div class="bg-white border col-span-4 p-6 rounded text-gray-600">
               <div class="mb-2">Expense Breakout</div>
               <TopExpenses />
            </div>
         </div>
      </div>
   </cx>
);
