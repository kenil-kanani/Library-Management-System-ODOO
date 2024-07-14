

import {Link} from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import { withRoleProtection } from "@/utils";

function LibrarianDashboard() {
	return (
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
				<nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
					<TooltipProvider>
						<Link
							href="#"
							className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
							prefetch={false}
						>
							<div className="h-4 w-4 transition-all group-hover:scale-110" />
							<span className="sr-only">Library</span>
						</Link>
					</TooltipProvider>
				</nav>
			</aside>
			<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
				<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								size="icon"
								variant="outline"
								className="sm:hidden"
							>
								<div className="h-5 w-5" />
								<span className="sr-only">Toggle Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="sm:max-w-xs">
							<nav className="grid gap-6 text-lg font-medium">
								<Link
									href="#"
									className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
									prefetch={false}
								>
									<div className="h-5 w-5 transition-all group-hover:scale-110" />
									<span className="sr-only">Library</span>
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
									prefetch={false}
								>
									<div className="h-5 w-5" />
									Dashboard
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-foreground"
									prefetch={false}
								>
									<div className="h-5 w-5" />
									Requests
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
									prefetch={false}
								>
									<div className="h-5 w-5" />
									Users
								</Link>
								<Link
									href="#"
									className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
									prefetch={false}
								>
									<div className="h-5 w-5" />
									Settings
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
					<Breadcrumb className="hidden md:flex">
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href="#" prefetch={false}>
										Dashboard
									</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Requests</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<div className="relative ml-auto flex-1 md:grow-0">
						<div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search requests..."
							className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
						/>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="overflow-hidden rounded-full"
							>
								<img
									src="/placeholder.svg"
									width={36}
									height={36}
									alt="Avatar"
									className="overflow-hidden rounded-full"
								/>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>Librarian</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
				<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
					<Card x-chunk="dashboard-07-chunk-0">
						<CardHeader className="px-7">
							<CardTitle>Pending Book Requests</CardTitle>
							<CardDescription>
								Review and approve or disapprove book requests
								from users.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>User</TableHead>
										<TableHead>Book</TableHead>
										<TableHead>Request Date</TableHead>
										<TableHead className="text-right">
											Action
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell>
											<div className="font-medium">
												John Doe
											</div>
											<div className="text-sm text-muted-foreground">
												john@example.com
											</div>
										</TableCell>
										<TableCell>The Great Gatsby</TableCell>
										<TableCell>2023-06-23</TableCell>
										<TableCell className="text-right">
											<Button
												variant="outline"
												size="sm"
												className="mr-2"
											>
												Approve
											</Button>
											<Button
												variant="outline"
												size="sm"
												className="text-red-500"
											>
												Disapprove
											</Button>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<div className="font-medium">
												Jane Smith
											</div>
											<div className="text-sm text-muted-foreground">
												jane@example.com
											</div>
										</TableCell>
										<TableCell>
											To Kill a Mockingbird
										</TableCell>
										<TableCell>2023-06-24</TableCell>
										<TableCell className="text-right">
											<Button
												variant="outline"
												size="sm"
												className="mr-2"
											>
												Approve
											</Button>
											<Button
												variant="outline"
												size="sm"
												className="text-red-500"
											>
												Disapprove
											</Button>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<div className="font-medium">
												Michael Johnson
											</div>
											<div className="text-sm text-muted-foreground">
												michael@example.com
											</div>
										</TableCell>
										<TableCell>1984</TableCell>
										<TableCell>2023-06-25</TableCell>
										<TableCell className="text-right">
											<Button
												variant="outline"
												size="sm"
												className="mr-2"
											>
												Approve
											</Button>
											<Button
												variant="outline"
												size="sm"
												className="text-red-500"
											>
												Disapprove
											</Button>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<div className="font-medium">
												Emily Brown
											</div>
											<div className="text-sm text-muted-foreground">
												emily@example.com
											</div>
										</TableCell>
										<TableCell>
											Pride and Prejudice
										</TableCell>
										<TableCell>2023-06-26</TableCell>
										<TableCell className="text-right">
											<Button
												variant="outline"
												size="sm"
												className="mr-2"
											>
												Approve
											</Button>
											<Button
												variant="outline"
												size="sm"
												className="text-red-500"
											>
												Disapprove
											</Button>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<div className="font-medium">
												David Lee
											</div>
											<div className="text-sm text-muted-foreground">
												david@example.com
											</div>
										</TableCell>
										<TableCell>
											The Catcher in the Rye
										</TableCell>
										<TableCell>2023-06-27</TableCell>
										<TableCell className="text-right">
											<Button
												variant="outline"
												size="sm"
												className="mr-2"
											>
												Approve
											</Button>
											<Button
												variant="outline"
												size="sm"
												className="text-red-500"
											>
												Disapprove
											</Button>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
						<CardFooter>
							<div className="text-xs text-muted-foreground">
								Showing <strong>1-10</strong> of{" "}
								<strong>32</strong>
								requests
							</div>
						</CardFooter>
					</Card>
				</main>
			</div>
		</div>
	);
}

export default withRoleProtection(LibrarianDashboard,"librarian")