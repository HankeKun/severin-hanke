# Homepage from Severin Hanke

This is a homepage by the developer Severin Hanke @github.com/HankeKun.

### Rename images:
```
Get-ChildItem *.JPG | Rename-Item -NewName { $_.Name -replace ' ','' }
Get-ChildItem *.JPG | Rename-Item -NewName { $_.Name -replace '\(','' }
Get-ChildItem *.JPG | Rename-Item -NewName { $_.Name -replace '\)','' }
Get-ChildItem *.JPG
```
```
Get-ChildItem *.jpg | Rename-Item -NewName { $_.Name -replace ' ','' };
Get-ChildItem *.jpg | Rename-Item -NewName { $_.Name -replace '\(','' };
Get-ChildItem *.jpg | Rename-Item -NewName { $_.Name -replace '\)','' };
Get-ChildItem *.jpg
```
