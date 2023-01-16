import { useQueryClient } from "@tanstack/solid-query";
import { For } from "solid-js";
import { Button } from "../../components/button";
import { CustomIcon } from "../../components/icon";
import { useGetTeams } from "../../hooks/apis";
import { DatesService } from "../../services";

export const ManageTeams = () => {
  const queryClient = useQueryClient();
  const query = useGetTeams();
  function revalidate() {
    queryClient.refetchQueries({ queryKey: ["teams"] });
  }

  return (
    <div>
      <div class="flex justify-between items-center mb-20">
        <h4 class="text-3xl font-semibold">Team members</h4>
        <Button
          variant="primary"
          size="sm"
          width="fit"
          onClick={() => revalidate()}
        >
          <span>Add Team Member</span>
        </Button>
      </div>

      <div class="overflow-y-hidden overflow-x-auto">
        <table class="w-full text-left border-2 border-gray-200 bg-white shadow-md rounded-lg">
          <thead class="border-b border-b-gray-200 bg-gray-50 uppercase text-gray-500 text-xs tracking-wide font-semibold whitespace-nowrap">
            <tr>
              <th class="px-6 py-3 text-left">
                Name
              </th>
              <th class="px-6 py-3 text-left">
                email
              </th>
              <th class="px-6 py-3 text-left">
                Created date
              </th>
              <th class="px-6 py-3 text-left flex justify-end">
                Action(s)
              </th>
            </tr>
          </thead>
          <tbody class="whitespace-nowrap">
            <For each={query.data}>
              {(teamMember) => (
                <tr class="text-gray-500 border-b group">
                  {/* <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                  </th> */}

                  <td class="px-6 py-4 whitespace-nowrap flex flex-col">
                    {teamMember.firstName + " " + teamMember.lastName}
                  </td>
                  <td class="px-6 py-4">
                    {teamMember.email}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {DatesService.formatDate(teamMember.createdAt)}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap flex justify-end">
                    <CustomIcon
                      iconType="outline"
                      iconName="bars_3"
                      onClick={console.log}
                      class="h-5 w-5 cursor-pointer stroke-2 hover:text-indigo-800 transition duration-700 translate-x-20 group-hover:translate-x-0"
                    />
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
};
