from django.shortcuts import render #,redirect
from django.http import JsonResponse
from home.models import Contact
# Create your views here.

def home(request):
    return render(request,'home.html')

def contact(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        contact = Contact(
            name=name,
            email=email,
            message=message
        )
        contact.save()
        return JsonResponse({'status': 'success'})
        # return redirect('home')
    # return render(request, 'home.html')
