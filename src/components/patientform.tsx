// src/components/PatientForm.tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const patientSchema = z.object({
  name: z.string().min(2, "Name is required"),
  age: z.number().min(1, "Age must be valid"),
  gender: z.enum(["Male", "Female", "Other"]),
  phone: z.string().min(10, "Phone must be valid"),
  location: z.string().min(2, "Location is required"),
});

type PatientFormValues = z.infer<typeof patientSchema>;

export function PatientForm({ onAdd }: { onAdd: (data: PatientFormValues) => void }) {
  const form = useForm<PatientFormValues>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: "",
      age: 0,
      gender: "Male",
      phone: "",
      location: "",
    },
  });

  const onSubmit = (data: PatientFormValues) => {
    onAdd(data);
    form.reset();
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Add Patient</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input {...form.register("name")} />
            {form.formState.errors.name && <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>}
          </div>

          <div>
            <Label>Age</Label>
            <Input type="number" {...form.register("age", { valueAsNumber: true })} />
          </div>

          <div>
            <Label>Gender</Label>
            <select {...form.register("gender")} className="border rounded-md p-2 w-full">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <Label>Phone</Label>
            <Input {...form.register("phone")} />
          </div>

          <div>
            <Label>Location</Label>
            <Input {...form.register("location")} />
          </div>

          <Button type="submit" className="w-full bg-gradient-primary">
            Add Patient
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
