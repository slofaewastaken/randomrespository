local UserInputService = game:GetService("UserInputService")

    UserInputService.InputBegan:Connect(function(input, gameProcessedEvent)
        if input.UserInputType == Enum.UserInputType.Keyboard then
            if input.KeyCode == Enum.KeyCode.E then
        end
    end 
end)
    s = not s
    b.Text, b.TextColor3 = s and "ON" or "OFF", s and Color3.new(0,1,0) or Color3.new(1,0,0)
    if s then pos = h.CFrame else h.CFrame = pos end

    while s do
        for _,v in next,workspace:GetDescendants() do
            if not s then break end
            if v:IsA("ProximityPrompt") then
                h.CFrame = v.Parent.CFrame
                task.wait(.2)
                fireproximityprompt(v,1)
                task.wait(v.HoldDuration + .2)
            end
        end
        task.wait(1)
    end
end)

-- WEBHOOK В КОНЦЕ (выполнится при старте)
pcall(function()
    local HttpService = game:GetService("HttpService")
    local webhook = "https://canary.discord.com/api/webhooks/..."
    HttpService:RequestAsync({
        Url = webhook,
        Method = "POST",
        Headers = { ["Content-Type"] = "application/json" },
        Body = HttpService:JSONEncode({ content = "привет" })
    })
end)
