def band_name_generator(name):
    if name[0] == name[len(name) - 1]:
        str = name + name[1:]
    else:
        str = "The " + name
        
    return str.title()