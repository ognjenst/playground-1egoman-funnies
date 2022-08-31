import Controller from './Controller';
import { Messages } from './Messages';

export default () => (
   <cx>
      <div class="bg-gray-50 overflow-auto" controller={Controller}>
         <div class="grid grid-cols-4 p-8 gap-8" style="grid-template-rows: auto; width: 1150px">
            <div class="bg-white border col-span-4 p-6 rounded text-gray-600">
               <div class="mb-2">Messages</div>
               <Messages />
            </div>
         </div>
      </div>
   </cx>
);
