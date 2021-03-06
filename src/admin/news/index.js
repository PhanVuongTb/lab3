import data from "../../data";

const News = {
    render() {
        return /* html */`
<div class="max-w-5xl mx-auto">
<div class="-my-0 sm:-mx-6 lg:-mx-8">
  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hinh Ảnh
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Tiêu Đề
          </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ngày Tạo
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nội Dung Chính
            </th>
            <th scope="col" class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Sửa
            </th>
            <th scope="col" class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Xóa
           </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        ${data.map((post) => `
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                <a href="/news/${post.id}">
                  <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                </a>
                </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
            <a href="/news/${post.id}">
              <div class="text-sm text-gray-900">${post.title}</div>
            </a>

            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                12/12/2021
              </span>
            </td>
            <td class="px-6 py-4 text-sm text-gray-400">
             ${post.desc}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="/admin/edit" class="text-indigo-600 hover:text-indigo-900">sửa</a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="" class="text-indigo-600 hover:text-indigo-900">xóa</a>
          </td>
          </tr>
          `).join("")}
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="/admin/add" class="text-indigo-600 hover:text-indigo-900">Thêm Tin Tức</a>
        </td>
          <!-- More people... -->
      
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
`;
    },
};
export default News;