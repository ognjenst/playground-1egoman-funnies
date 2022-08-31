import { Grid } from 'cx/widgets';

export const Messages = () => (
   <cx>
      <Grid
         records-bind="$page.messages"
         headerMode="plain"
         columns={[
            {
               field: 'id',
               header: 'ID',
               sortable: true,
            },
            {
               field: 'name',
               header: 'Message',
            },
         ]}
      />
   </cx>
);
