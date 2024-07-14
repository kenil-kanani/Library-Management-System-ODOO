import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Admin = () => {
	const libraries = [
		{
			id: 1,
			libraryName: "Central Library",
			address: "123 Main St, Cityville",
			librarian: 1,
		},
		{
			id: 2,
			libraryName: "Westside Branch",
			address: "456 Elm St, Townsville",
			librarian: 2,
		},
		{
			id: 3,
			libraryName: "Eastside Branch",
			address: "789 Oak St, Villagetown",
			librarian: 3,
		},
		{
			id: 4,
			libraryName: "Northside Branch",
			address: "101 Maple St, Hamletville",
			librarian: 4,
		},
		{
			id: 5,
			libraryName: "Southside Branch",
			address: "202 Pine St, Suburbia",
			librarian: 5,
		},
	];

	return (
		<div className="flex flex-col min-h-screen bg-background">
			<main className="flex-1 container mx-auto py-8 px-6 md:px-8">
				<section className="mb-8">
					<h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						<Card>
							<CardContent className="p-4">
								<div className="flex items-center justify-between">
									<h3 className="text-lg font-semibold">
										Total Libraries
									</h3>
									<span className="text-2xl font-bold">
										24
									</span>
								</div>
								<p className="text-muted-foreground mt-2">
									View and manage all libraries under your
									administration.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>
				<section className="mb-8">
					<h2 className="text-2xl font-bold mb-4">
						Manage Libraries
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{libraries.map((library) => (
							<Card key={library.id}>
								<CardContent className="p-4">
									<div className="flex items-center justify-between">
										<h3 className="text-lg font-semibold">
											{library.libraryName}
										</h3>
										<Button size="sm">update</Button>
									</div>
									<p className="text-muted-foreground mt-2">
										{library.address}
									</p>
									<p className="text-muted-foreground mt-2">
										{library.librarian}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="mt-6 text-left">
						<Link to={"/add-library"} >
                            <Button
                                
                            >
                                Add new library
                            </Button>
                        </Link>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Admin;
