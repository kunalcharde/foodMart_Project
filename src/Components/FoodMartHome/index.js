import React, { Suspense, useEffect, useState } from 'react';
const DataGridDemo = React.lazy(() => import('../DataGridComponent'));

function FoodMartHomePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DataGridDemo />
      </Suspense>
    </div>
  );
}
export default FoodMartHomePage;
