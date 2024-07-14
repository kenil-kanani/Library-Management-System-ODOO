import React, { useEffect, useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getAllLibrary } from "@/api";
import { useToast } from "@/components/ui/use-toast"


const Admin = () => {
	const toast = useToast();
	const [libraries, setLibraries] = useState([]);

	const fetchData = async () => {
		try {
			const result = await getAllLibrary();

			if (result && result.data) {
				setLibraries(result.data);
				toast({
					title: "Data fetched successfully",
					duration: 3000,
				});
			} else {
				toast({
					title:
						result?.message ||
						"Something went wrong while fetching the data",
					duration: 2000,
				});
			}
		} catch (error) {
			toast({
				title: "Error fetching data",
				description: error.message,
				duration: 2000,
			});
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

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
										{libraries.length}
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
						<Link to={`/manage-library/${libraries.id}`}>
							Manage Libraries
						</Link>
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{libraries.map((library) => (
							<Card key={library.id}>
								<CardContent className="p-4">
									<div className="flex items-center justify-between">
										<h3 className="text-lg font-semibold">
											{library.libraryName}
										</h3>
										<Link to={`/updateLib/${library.id}`}>
											<Button size="sm">Update</Button>
										</Link>
									</div>
									<p className="text-muted-foreground mt-2">
										{library.address}
									</p>
									<p className="text-muted-foreground mt-2">
										Librarian ID: {library.librarian}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="mt-6 text-left">
						<Link to="/add-library">
							<Button>Add new library</Button>
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Admin;
