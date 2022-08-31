import { FirstVisibleChildLayout } from 'cx/ui';
import { DocumentTitle, RedirectRoute } from 'cx/widgets';
import { SandboxedRoute } from '../components/SandboxedRoute';
import { CheckerLayout } from '../layout/CheckerLayout';
import Dashboard from './dashboard';

export default () => (
   <cx>
      <FirstVisibleChildLayout>
         <RedirectRoute route="~/" redirect="~/dashboard" url-bind="url" />

         <CheckerLayout>
            <SandboxedRoute route="~/dashboard">
               <Dashboard />
            </SandboxedRoute>
         </CheckerLayout>
      </FirstVisibleChildLayout>

      <DocumentTitle append text="Funnies" separator=" | " />
   </cx>
);
