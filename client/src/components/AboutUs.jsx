
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {Link} from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

export default function AboutUs() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Our Mission and Values
						</h1>
						<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							At Acme Inc., our mission is to empower businesses
							of all sizes with cutting-edge technology solutions
							that drive innovation and growth. We are committed
							to delivering exceptional service, fostering a
							collaborative work environment, and upholding the
							highest ethical standards.
						</p>
					</div>
					<div className="flex flex-col items-start space-y-4">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
							Our Values
						</div>
						<ul className="grid gap-4 text-muted-foreground">
							<li className="flex items-start gap-3">
								<CheckIcon className="w-5 h-5 mt-1 text-primary" />
								<div>
									<h3 className="text-lg font-semibold">
										Integrity
									</h3>
									<p>
										We are committed to honesty,
										transparency, and ethical business
										practices in all that we do.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<CheckIcon className="w-5 h-5 mt-1 text-primary" />
								<div>
									<h3 className="text-lg font-semibold">
										Innovation
									</h3>
									<p>
										We continuously strive to push the
										boundaries of technology, delivering
										cutting-edge solutions to our clients.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<CheckIcon className="w-5 h-5 mt-1 text-primary" />
								<div>
									<h3 className="text-lg font-semibold">
										Collaboration
									</h3>
									<p>
										We believe in the power of teamwork and
										foster a collaborative environment to
										achieve our goals.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
