export const Table = () => {
  return (
    <div class="overflow-y-hidden overflow-x-auto">
      <table class="w-full text-left border border-gray-200 bg-white shadow-md rounded-lg">
        <thead class="border-b border-b-gray-200 bg-gray-50 uppercase text-gray-500 text-xs tracking-wide">
          <tr>
            <th class="px-6 py-3 text-left font-medium whitespace-nowrap">
              Product name
            </th>
            <th class="px-6 py-3 text-left font-medium whitespace-nowrap">
              Color
            </th>
            <th class="px-6 py-3 text-left font-medium whitespace-nowrap">
              Category
            </th>
            <th class="px-6 py-3 text-left font-medium whitespace-nowrap">
              Price
            </th>
            <th class="px-6 py-3 text-left font-medium whitespace-nowrap">
              Action(s)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-gray-500">
            {/* <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
            Apple MacBook Pro 17"
          </th> */}
            <td class="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
              Apple MacBook Pro 17"
            </td>
            <td class="px-6 py-4 whitespace-nowrap">Sliver</td>
            <td class="px-6 py-4 whitespace-nowrap">Laptop</td>
            <td class="px-6 py-4 whitespace-nowrap">$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
