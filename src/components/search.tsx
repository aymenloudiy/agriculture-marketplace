import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CiSearch } from "react-icons/ci";
import { Separator } from "@radix-ui/react-select";
import data from "@/shared/data";

export default function search() {
  return (
    <div className="p-2 bg-white md:p-5 rounded-mg md:rounded-full flex-col md:flex md:flex-row w-[60%] gap-10 px-5 items-center">
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="test" />
        </SelectTrigger>
        <SelectContent>
          {data.data.map((item: { id: number; name: string }) => (
            <SelectItem key={item.id} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator className="bg-gray-400 hidden md:block" />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="test" />
        </SelectTrigger>
        <SelectContent>
          {data.data.map((item: { id: number; name: string }) => (
            <SelectItem key={item.id} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <CiSearch className="text-4xl text-gray-700 bg-[#82BA9F] rounded-full p-3 hover:scale-105 transition-all cursor-pointer " />
      </div>
    </div>
  );
}
