import {
  User,
  UserRound,
  CircleUser,
  CircleUserRound,
  UserCircle,
  Users,
  UserPlus,
  UserCheck,
  UserX,
  UserCog,
  UserRoundCog,
  Search,
} from "lucide-react";

export default function SwitchUserButton() {
    return (
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-500 hover:text-white hover:bg-blue-600 transition-colors md:w-12 md:h-12">
            <UserCog className="size-6 md:size-7" />
        </button>
    );
}