import React from "react";
import {Link} from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import TwitterIcon from "@/icons/TwitterIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcon from "@/icons/InstagramIcon";
export default function ContactUs() {
	return (
		<div>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Get in Touch
						</h2>
						<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Have a question or want to learn more about our
							services? Fill out the form below, and we'll get
							back to you as soon as possible.
						</p>
						<div className="mt-6 grid gap-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<Label htmlFor="name">Name</Label>
									<Input id="name" placeholder="John Doe" />
								</div>
								<div>
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="john@example.com"
									/>
								</div>
							</div>
							<div>
								<Label htmlFor="message">Message</Label>
								<Textarea
									id="message"
									placeholder="How can we help you?"
								/>
							</div>
							<div>
								<Label htmlFor="phone">Phone (optional)</Label>
								<Input
									id="phone"
									type="tel"
									placeholder="+1 (555) 555-5555"
								/>
							</div>
							<Button type="submit" className="w-full">
								Submit
							</Button>
						</div>
					</div>
					<div className="space-y-4">
						<div className="grid gap-1">
							<h3 className="text-lg font-semibold">
								Contact Information
							</h3>
							<div className="flex items-center gap-2">
								<MapPinIcon className="w-5 h-5 text-muted-foreground" />
								<p className="text-muted-foreground">
									123 Main Street, Anytown USA 12345
								</p>
							</div>
							<div className="flex items-center gap-2">
								<MailIcon className="w-5 h-5 text-muted-foreground" />
								<p className="text-muted-foreground">
									info@acmeinc.com
								</p>
							</div>
							<div className="flex items-center gap-2">
								<PhoneIcon className="w-5 h-5 text-muted-foreground" />
								<p className="text-muted-foreground">
									(555) 555-5555
								</p>
							</div>
						</div>
						<div className="grid gap-1">
							<h3 className="text-lg font-semibold">Follow Us</h3>
							<div className="flex gap-2">
								<Link
									href="#"
									className="text-muted-foreground hover:underline"
									prefetch={false}
								>
									<LinkedinIcon className="w-5 h-5" />
								</Link>
								<Link
									href="#"
									className="text-muted-foreground hover:underline"
									prefetch={false}
								>
									<TwitterIcon className="w-5 h-5" />
								</Link>
								<Link
									href="#"
									className="text-muted-foreground hover:underline"
									prefetch={false}
								>
									<FacebookIcon className="w-5 h-5" />
								</Link>
								<Link
									href="#"
									className="text-muted-foreground hover:underline"
									prefetch={false}
								>
									<InstagramIcon className="w-5 h-5" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
